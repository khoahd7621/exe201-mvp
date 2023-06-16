package com.hanyu.hanyube.domain.api.user;


import com.hanyu.hanyube.domain.dto.comment.AnswerCommentRequest;
import com.hanyu.hanyube.domain.dto.comment.CommentResponse;
import com.hanyu.hanyube.domain.dto.comment.CreateCommentRequest;
import com.hanyu.hanyube.domain.enums.UserRoleEnum;
import com.hanyu.hanyube.service.features.comment.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
public class CommentController {
    private final CommentService commentService;

    @PostMapping("/api/comments")
    @PreAuthorize("hasRole('" + UserRoleEnum.Role.USER + "')")
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody @Valid CreateCommentRequest request) {
        commentService.create(request);
    }

    @GetMapping("/api/comments/{rootCommentId}")
    @PreAuthorize("hasRole('" + UserRoleEnum.Role.USER + "')")
    @ResponseStatus(HttpStatus.OK)
    public List<CommentResponse> getAnswerById(@PathVariable UUID rootCommentId) {
        return commentService.getAnswerById(rootCommentId);
    }


    @GetMapping("/api/public/comments")
    @ResponseStatus(HttpStatus.OK)
    public List<CommentResponse> getAll(@RequestParam int pageSize, @RequestParam int pageNumber) {
        return commentService.getAllRoot(pageSize, pageNumber);
    }


    @PostMapping("/api/comments/{commentId}/like")
    @PreAuthorize("hasRole('" + UserRoleEnum.Role.USER + "')")
    @ResponseStatus(HttpStatus.CREATED)
    public void likeComment(@PathVariable UUID commentId) {
        commentService.likeComment(commentId);
    }

    @PostMapping("/api/comments/{commentId}")
    @PreAuthorize("hasRole('" + UserRoleEnum.Role.USER + "')")
    @ResponseStatus(HttpStatus.CREATED)
    public void answerComment(@PathVariable UUID commentId, @RequestBody @Valid AnswerCommentRequest request) {
        commentService.answerComment(commentId, request);
    }
}
