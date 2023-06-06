package com.hanyu.hanyube.service.features.wordnote;


import com.hanyu.hanyube.service.entities.WordNoteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface WordNoteRepository extends JpaRepository<WordNoteEntity, Long> {
    Optional<WordNoteEntity> findByUserIdAndWordId(final UUID userId, final int wordId);

    List<WordNoteEntity> findByUserId(final UUID userId);
}
