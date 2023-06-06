package com.hanyu.hanyube.domain.dto.wordnote;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.util.UUID;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UpdateWordNoteRequest {
    @JsonIgnore
    private UUID userId;
    @NotNull
    private String note;
    @NotNull
    private int wordId;
}
