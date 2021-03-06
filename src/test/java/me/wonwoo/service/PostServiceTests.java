package me.wonwoo.service;

import javafx.geometry.Pos;
import me.wonwoo.domain.model.Category;
import me.wonwoo.domain.model.CategoryPost;
import me.wonwoo.domain.model.Post;
import me.wonwoo.domain.model.User;
import me.wonwoo.domain.repository.CategoryPostRepository;
import me.wonwoo.domain.repository.PostRepository;
import me.wonwoo.junit.MockitoJsonJUnitRunner;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;

import java.util.Arrays;
import java.util.Collections;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

/**
 * Created by wonwoo on 2017. 2. 12..
 */
@RunWith(MockitoJsonJUnitRunner.class)
public class PostServiceTests {

  @Mock
  private PostRepository postRepository;

  @Mock
  private CategoryPostRepository categoryPostRepository;

  private PostService postService;

  @Before
  public void setup() {
    postService = new PostService(postRepository, categoryPostRepository);
  }

  @Test
  public void createPostTest() {
    final Post post = new Post("post title", "post content",
      "code", "Y", Collections.singletonList(new Category(1L, "spring")),
      new User(), Collections.emptyList());
    given(postRepository.save(any(Post.class)))
      .willReturn(post);

    final Post result = postRepository.save(post);
    assertThat(result.getTitle()).isEqualTo("post title");
    assertThat(result.getContent()).isEqualTo("post content");
    assertThat(result.getCode()).isEqualTo("code");
    assertThat(result.getYn()).isEqualTo("Y");
  }

  @Test
  public void updatePost() {
    final Post post = new Post("post title", "post content",
      "code", "Y", Collections.singletonList(new Category(1L, "spring")),
      new User(), Collections.emptyList());
    given(postRepository.findByIdAndYn(any(), any()))
      .willReturn(post);

    postService.updatePost(1L, post);
    verify(postRepository, times(1))
      .findByIdAndYn(1L, "Y");
    verify(categoryPostRepository, times(1))
      .delete(post.getCategoryPost());
    verify(categoryPostRepository, times(1))
      .save(post.getCategoryPost());
  }

  @Test
  public void deletePostTest() {
    final Post post = new Post("post title", "post content",
      "code", "Y", Collections.singletonList(new Category(1L, "spring")),
      new User(), Collections.emptyList());
    given(postRepository.findByIdAndYn(any(), any()))
      .willReturn(post);
    postService.deletePost(1L);
    verify(postRepository, times(1))
      .findByIdAndYn(1L, "Y");

  }


}