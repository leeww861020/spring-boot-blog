package me.wonwoo.web;

import lombok.RequiredArgsConstructor;
import me.wonwoo.domain.model.Category;
import me.wonwoo.domain.model.Post;
import me.wonwoo.domain.repository.PostRepository;
import me.wonwoo.dto.PostDto;
import me.wonwoo.service.PostService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Created by wonwoo on 2016. 8. 15..
 */
@Controller
@RequiredArgsConstructor
@RequestMapping("/posts")
public class PostController {

  private final PostRepository postRepository;

  private final PostService postService;

  @GetMapping("/{id}")
  public String findByPost(@PathVariable Long id, Model model) {
    model.addAttribute("post", postRepository.findOne(id));
    return "post";
  }

  @GetMapping
  public String post(PostDto.CreatePost createPost) {
    return "markdown";
  }

  @PostMapping
  public String createPost(@ModelAttribute @Valid PostDto.CreatePost createPost, BindingResult bindingResult, Model model) {
    if(bindingResult.hasErrors()){
      return "markdown";
    }
    Post post = new Post(createPost.getTitle(),
                        createPost.getContent(),
                        new Category(createPost.getCategoryId() == null ? 1L : createPost.getCategoryId()));
    model.addAttribute("post", postService.createPost(post));
    return "post";

  }


}
