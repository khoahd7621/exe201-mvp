package com.hanyu.hanyube.domain.api.user;


import com.hanyu.hanyube.domain.dto.wordnote.UpdateWordNoteRequest;
import com.hanyu.hanyube.domain.enums.UserRoleEnum;
import com.hanyu.hanyube.service.entities.WordNoteEntity;
import com.hanyu.hanyube.service.features.wordnote.WordNoteService;
import com.hanyu.hanyube.service.utils.AuthUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class WordNoteController {
    private final WordNoteService wordNoteService;

    @PutMapping("/api/user/word-notes")
    @PreAuthorize("hasRole('" + UserRoleEnum.Role.USER + "')")
    @ResponseStatus(HttpStatus.OK)
    public void update(UpdateWordNoteRequest request) {
        request.setUserId(AuthUtils.getUserId());
        wordNoteService.update(request);
    }

    @GetMapping("/api/user/word-notes")
    @PreAuthorize("hasRole('" + UserRoleEnum.Role.USER + "')")
    @ResponseStatus(HttpStatus.OK)
    public List<WordNoteEntity> getAll() {
        return wordNoteService.getAll(AuthUtils.getUserId());
    }
}
