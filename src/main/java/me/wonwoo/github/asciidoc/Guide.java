package me.wonwoo.github.asciidoc;

import com.fasterxml.jackson.annotation.JsonTypeInfo;

/**
 * Created by Helloworld
 * User : wonwoo
 * Date : 2016-09-05
 * Time : 오후 6:16
 * desc :
 */
@JsonTypeInfo(use = JsonTypeInfo.Id.CLASS)
public interface Guide extends DocumentContent, GuideMetadata {

}