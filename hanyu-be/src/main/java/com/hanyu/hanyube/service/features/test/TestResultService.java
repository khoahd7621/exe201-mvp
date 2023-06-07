package com.hanyu.hanyube.service.features.test;

import com.hanyu.hanyube.domain.dto.test.TestResultRequest;
import com.hanyu.hanyube.domain.dto.test.TestResultResponse;
import com.hanyu.hanyube.service.entities.PartResultEntity;
import com.hanyu.hanyube.service.entities.TestResultEntity;
import com.hanyu.hanyube.service.entities.UserAnswerEntity;
import com.hanyu.hanyube.service.utils.AuthUtils;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class TestResultService {
    private final ModelMapper modelMapper;
    private final TestResultRepository testResultRepository;
    private final AnswerResultRepository answerResultRepository;
    private final PartResultRepository partResultRepository;

    public void create(TestResultRequest request) {
        request.setUserId(AuthUtils.getUserId());
        var testResultSaved = testResultRepository.saveAndFlush(modelMapper.map(request, TestResultEntity.class));
        var partResults = request.getPartResults().stream().map(it -> {
            var response = modelMapper.map(it, PartResultEntity.class);
            response.setTestResultId(testResultSaved.getId());
            return response;
        }).toList();
        var userAnswers = request.getUserAnswers().stream().map(it -> {
            var response = modelMapper.map(it, UserAnswerEntity.class);
            response.setTestResultId(testResultSaved.getId());
            return response;
        }).toList();
        answerResultRepository.saveAll(userAnswers);
        partResultRepository.saveAll(partResults);
    }

    public List<TestResultResponse> getAll() {
        return testResultRepository.findByUserId(AuthUtils.getUserId()).stream().map(it -> {
            var response = modelMapper.map(it, TestResultResponse.class);
            response.setPartResults(partResultRepository.findByTestResultId(it.getId()));
            response.setUserAnswers(answerResultRepository.findByTestResultId(it.getId()));
            return response;
        }).toList();
    }
}
