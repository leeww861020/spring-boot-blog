package me.wonwoo.wordpress;

import me.wonwoo.client.Client;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 * Created by wonwoo on 2016. 9. 6..
 */
@Service
public class WordPressClient extends Client {

  private static final String WP_API = "https://public-api.wordpress.com/rest/v1.1/sites/";
  private static final String MY_SITE = "aoruqjfu.fun25.co.kr/";

  public WordPressClient(RestTemplate restTemplate) {
    super(restTemplate);
  }

  @Cacheable("wp.posts")
  public Page<WordPress> findAll(Pageable pageable) {
    String url = String.format(
      WP_API + MY_SITE + "posts?number=%s&page=%s&fields=ID,content,title",
      pageable.getPageSize(), pageable.getPageNumber() + 1);
    WordPresses body = invoke(createRequestEntity(url), WordPresses.class).getBody();
    return new PageImpl<>(body.getPosts(), pageable, body.getFound());
  }
}
