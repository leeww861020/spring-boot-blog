package me.wonwoo.config.interceptor;

import lombok.extern.slf4j.Slf4j;
import me.wonwoo.domain.model.BlogHistory;
import me.wonwoo.domain.repository.BlogHistoryRepository;
import me.wonwoo.service.BlogHistoryService;
import me.wonwoo.web.Navigation;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.time.LocalDateTime;

import static me.wonwoo.support.utils.ServletUtils.requestIP;

/**
 * Created by wonwoo on 2017. 2. 14..
 */
@Slf4j
public class CommonHandlerInterceptor extends HandlerInterceptorAdapter {

  private final static String NAV_SECTION = "navSection";
  private final BlogHistoryRepository blogHistoryRepository;

  public CommonHandlerInterceptor(BlogHistoryRepository blogHistoryRepository) {
    this.blogHistoryRepository = blogHistoryRepository;
  }

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

    try {
      HandlerMethod handlerMethod = (HandlerMethod) handler;
//      final String requestURL = request.getRequestURL().toString();
//      final String requestURI = request.getRequestURI();
//      String referer = request.getHeader("REFERER");
//      String navigation = (String) request.getSession().getAttribute(NAV_SECTION);
//      try {
//        blogHistoryRepository.save(new BlogHistory(requestURI, requestURL, requestIP(), navigation, referer, LocalDateTime.now()));
//      } catch (Exception ignored) {
//        System.out.println(ignored);
//      }
      logger.info("Current Request Handler : uri : {}, queryString : {}, ip : {}",
        request.getRequestURI(),
        request.getQueryString(),
        requestIP()
      );
      return true;
    } catch (Exception ignored) {
    }
    return true;
  }

  @Override
  public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
                         ModelAndView modelAndView) throws Exception {
    if (handler instanceof HandlerMethod) {
      HandlerMethod handlerMethod = (HandlerMethod) handler;
      Navigation navSection = handlerMethod.getBean().getClass().getAnnotation(Navigation.class);
      if (navSection != null && modelAndView != null) {
        request.getSession().setAttribute(NAV_SECTION, navSection.value().getValue());
        modelAndView.addObject(NAV_SECTION, navSection.value().getValue());
      }
    }
  }
}
