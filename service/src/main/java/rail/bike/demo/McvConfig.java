package rail.bike.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class McvConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/home").setViewName("home");
        registry.addViewController("/").setViewName("home");
        registry.addViewController("/main").setViewName("main");
        registry.addViewController("/login").setViewName("login");
        addBizViewControllers(registry);
    }
    
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/").setCachePeriod(20);
    }
    
    public void addBizViewControllers(ViewControllerRegistry registry){
        registry.addViewController("/biz/add").setViewName("biz/add");
        registry.addViewController("/biz/item").setViewName("biz/item");
        registry.addViewController("/biz/list").setViewName("biz/list");
        registry.addViewController("/biz/report").setViewName("biz/report");
    }
}
