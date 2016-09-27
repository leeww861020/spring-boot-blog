package me.wonwoo.web;

import lombok.RequiredArgsConstructor;
import me.wonwoo.wordpress.WordPress;
import me.wonwoo.wordpress.WordPressClient;
import me.wonwoo.wordpress.domain.WpPosts;
import me.wonwoo.wordpress.repostiry.WpPostsRepository;
import me.wonwoo.wordpress.service.WpPostsService;
import org.apache.commons.lang.StringEscapeUtils;
import org.pegdown.PegDownProcessor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.util.stream.Collectors.toList;
import static org.apache.commons.lang.StringEscapeUtils.unescapeHtml;

/**
 * Created by wonwoo on 2016. 9. 6..
 */
@RequiredArgsConstructor
@Controller
@RequestMapping("/wordPress")
@Navigation(Section.WORDPRESS)
public class WordPressController {

    private final WordPressClient wordPressClient;
    private final WpPostsService wpPostsService;
    private final WpPostsRepository wpPostsRepository;
    private final PegDownProcessor pegDownProcessor;

    @GetMapping("/http")
    public String findAllHttp(Model model, @PageableDefault(size = 3) Pageable pageable, @RequestParam(required = false, defaultValue = "") String q) {
        model.addAttribute("wordPresses", wordPressClient.findAll(pageable, q));
        return "wordpress/wordPresses";
    }

    @GetMapping("/http/{id}")
    public String findOneHttp(@PathVariable Long id, Model model) {
        model.addAttribute("wordPress", wordPressClient.findOne(id));
        return "wordpress/wordPress";
    }

    @GetMapping
    public String findAll(Model model, @PageableDefault(size = 3, sort = "postDate", direction = Sort.Direction.DESC) Pageable pageable, @RequestParam(required = false, defaultValue = "") String q) {
        Page<WpPosts> wpPostses = wpPostsService.findByPosts(q, pageable);
        List<WpPosts> wpPosts = wpPostses.getContent().stream().peek(content -> content.setPostContent(pegDownProcessor.markdownToHtml(unescapeHtml(content.getPostContentFiltered())))).collect(toList());
        model.addAttribute("wordPresses", new PageImpl<>(wpPosts, pageable, wpPostses.getTotalElements()));
        return "wordpress/wordPresses";
    }
    @GetMapping("/{id}")
    public String findOne(@PathVariable Long id, Model model) {
        WpPosts wpPosts = wpPostsService.findByPost(id);
        wpPosts.setPostContent(pegDownProcessor.markdownToHtml(unescapeHtml(wpPosts.getPostContentFiltered())));
        List<String> tags = wpPostsRepository.findByTags(id, "post_tag");
        model.addAttribute("wordPress", wpPosts);
        model.addAttribute("tags", tags);
        return "wordpress/wordPress";
    }
}
