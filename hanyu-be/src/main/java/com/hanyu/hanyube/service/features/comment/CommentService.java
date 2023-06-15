package com.hanyu.hanyube.service.features.comment;

import com.hanyu.hanyube.domain.dto.comment.AnswerCommentRequest;
import com.hanyu.hanyube.domain.dto.comment.CommentResponse;
import com.hanyu.hanyube.domain.dto.comment.CreateCommentRequest;
import com.hanyu.hanyube.domain.dto.login.UserLifeInfo;
import com.hanyu.hanyube.domain.enums.CommentStatusEnum;
import com.hanyu.hanyube.service.entities.CommentEntity;
import com.hanyu.hanyube.service.entities.UserEntity;
import com.hanyu.hanyube.service.exceptions.BadRequestException;
import com.hanyu.hanyube.service.features.user.UserService;
import com.hanyu.hanyube.service.utils.AuthUtils;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.function.Function;
import java.util.stream.Collectors;

import static com.hanyu.hanyube.domain.constants.ErrorCodeConstants.COMMENT_NOT_FOUND;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final UserService userService;
    private final ModelMapper modelMapper;

    public void create(CreateCommentRequest request) {
        var newEntity = modelMapper.map(request, CommentEntity.class);
        newEntity.setUserId(AuthUtils.getUserId());
        commentRepository.save(newEntity);
    }

    public void answerComment(UUID commentId, AnswerCommentRequest request) {
        var rootComment = commentRepository.findByIdAndStatus(commentId, CommentStatusEnum.AVAILABLE);
        if (rootComment.isEmpty()) {
            throw new BadRequestException(String.format(COMMENT_NOT_FOUND, commentId));
        }

        var newEntity = modelMapper.map(request, CommentEntity.class);
        newEntity.setUserId(AuthUtils.getUserId());
        newEntity.setTitle(rootComment.get().getTitle());
        newEntity.setParentId(commentId);
        commentRepository.save(newEntity);
    }

    public List<CommentResponse> getAllRoot(int pageSize, int pageNumber) {
        Pageable pageable = PageRequest.of(pageNumber - 1, pageSize, Sort.by("createdAt").descending());
        var userIds = new HashSet<UUID>();
        var rootComments = commentRepository.findAllByStatusAndParentIdIsNull(CommentStatusEnum.AVAILABLE, pageable)
                .stream()
                .peek(it -> {
                    if (Objects.nonNull(it.getUserId())) {
                        userIds.add(it.getUserId());
                    }
                }).toList();
        if (CollectionUtils.isEmpty(rootComments)) {
            return List.of();
        }
        var userMaps = userService.getAllByIds(userIds).stream()
                .collect(Collectors.toMap(UserEntity::getId, Function.identity()));

        return rootComments.stream().map(it -> {
            var tmp = modelMapper.map(it, CommentResponse.class);
            if (userMaps.containsKey(it.getUserId())) {
                tmp.setUserLifeInfo(modelMapper.map(
                        userMaps.getOrDefault(it.getUserId(), null),
                        UserLifeInfo.class));
            }
            tmp.setAnswerNumber(commentRepository.countByRootId(it.getId()));
            return tmp;
        }).toList();
    }

    public void likeComment(UUID commentId) {
        var commentEntity = commentRepository.findByIdAndStatus(commentId, CommentStatusEnum.AVAILABLE)
                .orElseThrow(() -> new BadRequestException(String.format(COMMENT_NOT_FOUND, commentId)));
        commentEntity.setLikeNumber(commentEntity.getLikeNumber() + 1);
        commentRepository.saveAndFlush(commentEntity);
    }

    public List<CommentResponse> getAnswerById(UUID rootCommentId) {
        var userIds = new HashSet<UUID>();
        var response = commentRepository.findByParentIdAndStatus(rootCommentId, CommentStatusEnum.AVAILABLE)
                .stream()
                .map(it -> {
                    userIds.add(it.getUserId());
                    return modelMapper.map(it, CommentResponse.class);
                })
                .toList();
        if(CollectionUtils.isEmpty(response)){
            return response;
        }
        var userEntityMap = userService.getAllByIds(userIds).stream()
                .collect(Collectors.toMap(UserEntity::getId, Function.identity()));
        if(userEntityMap.isEmpty()){
            return response;
        }
        response.stream().forEach(it -> {
            if(userEntityMap.containsKey(it.getUserId())){
                var userEntity = userEntityMap.getOrDefault(it.getUserId(), null);
                it.setUserLifeInfo(UserLifeInfo.builder()
                        .userId(it.getUserId())
                                .name(userEntity.getName())
                                .shortDescription(userEntity.getShortDescription())
                        .build());
            }
        });
        return response;
    }
}
