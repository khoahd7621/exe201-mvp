package com.hanyu.hanyube.service.features.rating;

import com.hanyu.hanyube.domain.dto.rating.RatingRequest;
import com.hanyu.hanyube.domain.dto.rating.RatingResponse;
import com.hanyu.hanyube.domain.dto.rating.RatingResponses;
import com.hanyu.hanyube.service.entities.RatingEntity;
import com.hanyu.hanyube.service.exceptions.BadRequestException;
import com.hanyu.hanyube.service.utils.AuthUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;

@Service
@RequiredArgsConstructor
public class RatingService {
    private final RatingRepository ratingRepository;

    public void create(RatingRequest request) {
        ratingRepository.save(RatingEntity.builder()
                .star(request.getStar())
                .description(request.getDescription())
                .userId(request.getUserId())
                .build());
    }

    public RatingResponse getByUserId(UUID userId) {
        var entity = ratingRepository.findByUserId(userId).orElseThrow(() -> new BadRequestException("Rating not found!"));
        return mapper(entity);
    }

    public void update(RatingRequest request) {
        var entity = ratingRepository.findByUserId(AuthUtils.getUserId())
                .orElseThrow(() -> new BadRequestException("Rating not found!"));
        if (request.getStar() != entity.getStar()) {
            entity.setStar(request.getStar());
        }
        if (Objects.nonNull(request.getDescription())) {
            entity.setDescription(request.getDescription());
        }
        ratingRepository.save(entity);
    }

    public RatingResponses getAll() {
        var ratings = ratingRepository.findAll();
        AtomicInteger totalStart = new AtomicInteger();
        ratings.forEach(item -> totalStart.getAndAdd(item.getStar()));
        return RatingResponses.builder()
                .total(ratings.size())
                .avg(ratings.size() != 0 ? (double) totalStart.get() / ratings.size() : 0.0)
                .ratings(ratings.stream().map(this::mapper).toList())
                .build();
    }

    private RatingResponse mapper(RatingEntity rating){
        return RatingResponse.builder()
                .id(rating.getId())
                .user_id(rating.getUserId())
                .star(rating.getStar())
                .description(rating.getDescription())
                .updatedAt(rating.getUpdatedAt())
                .createdAt(rating.getCreatedAt())
                .build();
    }
}
