package me.wonwoo.web;

import lombok.RequiredArgsConstructor;
import me.wonwoo.github.Commit;
import me.wonwoo.github.GithubClient;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.Duration;
import java.time.Instant;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Controller
@RequiredArgsConstructor
@RequestMapping("/news")
@Navigation(Section.NEWS)
public class NewController {

    private final GithubClient githubClient;

    @GetMapping
    public String home(Model model) {
        model.addAttribute("latestSpringBlogCommits",
                getRecentCommits("wonwoo", "spring-boot-blog"));
        return "news";
    }
    private List<Commit> getRecentCommits(String organization, String project) {
        return this.githubClient
                .getRecentCommits(organization, project)
                .stream().limit(5).collect(Collectors.toList());
    }
}
