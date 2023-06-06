package com.hanyu.hanyube.service.features.wordnote;

import com.hanyu.hanyube.domain.dto.wordnote.UpdateWordNoteRequest;
import com.hanyu.hanyube.service.entities.WordNoteEntity;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class WordNoteService {
    private final WordNoteRepository wordNoteRepository;
    private final ModelMapper modelMapper;

    public void update(UpdateWordNoteRequest request) {
        var oldNote = wordNoteRepository.findByUserIdAndWordId(request.getUserId(), request.getWordId()).orElse(null);
        //Existed -> update
        if (Objects.nonNull(oldNote)) {
            modelMapper.map(request, oldNote);
            wordNoteRepository.save(oldNote);
            return;
        }

        //Not existed -> Create
        var entity = modelMapper.map(request, WordNoteEntity.class);
        wordNoteRepository.save(entity);
    }

    public List<WordNoteEntity> getAll(final UUID userId) {
       return wordNoteRepository.findByUserId(userId);
    }
}
