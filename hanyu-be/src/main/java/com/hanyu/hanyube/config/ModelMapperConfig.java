package com.hanyu.hanyube.config;

import com.hanyu.hanyube.domain.dto.wordnote.UpdateWordNoteRequest;
import com.hanyu.hanyube.service.entities.WordNoteEntity;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {
    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.addMappings(new PropertyMap<UpdateWordNoteRequest, WordNoteEntity>() {
                    @Override
                    protected void configure() {
                        skip(destination.getId());
                    }
                });
        modelMapper
                .getConfiguration()
                .setFieldMatchingEnabled(true)
                .setAmbiguityIgnored(true)
                .setSkipNullEnabled(true)
                .setMatchingStrategy(MatchingStrategies.STANDARD);
        return modelMapper;
    }
}
