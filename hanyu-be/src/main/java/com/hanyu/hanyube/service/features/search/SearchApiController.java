package com.hanyu.hanyube.service.features.search;

import com.hanyu.hanyube.domain.api.SearchApi;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SearchApiController implements SearchApi {
    @Override
    @GetMapping("/search")
    public String testSearch() {
        return "Test Init";
    }
}
