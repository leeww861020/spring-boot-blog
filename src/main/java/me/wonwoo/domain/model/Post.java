package me.wonwoo.domain.model;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static java.util.stream.Collectors.toList;

/**
 * Created by wonwoo on 2016. 8. 15..
 */
@Entity
@Data
@EntityListeners(value = AuditingEntityListener.class)
@ToString(exclude = {"comments", "tags", "user", "category"})
@EqualsAndHashCode(exclude = {"comments", "tags", "user", "category"})
public class Post {

  @Id
  @GeneratedValue
  private Long id;

  @NotNull
  private String title;

  @Lob
  @NotNull
  private String content;

  @Lob
  private String code;

  private String yn;

  @CreatedDate
  private LocalDateTime regDate;

  @OneToMany(mappedBy = "post", fetch = FetchType.LAZY)
  private List<Comment> comments;

//  @OneToMany(mappedBy = "post", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//  private List<Tag> tags = new ArrayList<>();

  @ElementCollection
  @CollectionTable(name = "tag", joinColumns = @JoinColumn(name = "post_id"))
  private List<Tag> tags = new ArrayList<>();

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "USER_ID")
  private User user;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "CATEGORY_ID")
  private Category category;

  Post() {
  }

  public Post(Long id) {
    this.id = id;
  }

  public Post(String title, String yn) {
    this.title = title;
    this.yn = yn;
  }

  public Post(String title, String content, String code, String yn, Category category, User user, List<String> tags) {
    this.title = title;
    this.content = content;
    this.code = code;
    this.yn = yn;
    this.category = category;
    this.user = user;
    this.tags = tags.stream().map(Tag::new).collect(toList());
  }

  public void delete(){
    this.yn = "N";
  }
}
