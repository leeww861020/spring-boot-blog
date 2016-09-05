package me.wonwoo.github.asciidoc;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestOperations;


/**
 * Created by Helloworld
 * User : wonwoo
 * Date : 2016-09-05
 * Time : 오후 2:09
 * desc :
 */
@Component
public class CachedRestClient {

    public static final String CACHE_NAME = "cache.network";
    public static final String CACHE_TTL_KEY = "cache.network.timetolive";
    public static final String CACHE_TTL = "${cache.network.timetolive:300}";

    @Cacheable(value = CACHE_NAME, key = "#url")
    public <T> T get(RestOperations operations, String url, Class<T> clazz) {
        return operations.getForObject(url, clazz);
    }

    public <T> T post(RestOperations operations, String url, Class<T> clazz, String body) {
        HttpEntity<String> requestEntity = new HttpEntity<>(body);
        return operations.postForObject(url, requestEntity, clazz);
    }

}