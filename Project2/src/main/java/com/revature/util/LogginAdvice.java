package com.revature.util;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

@Aspect
@Component
public class LogginAdvice {
	
	
	Logger log = LoggerFactory.getLogger(LogginAdvice.class);
	
	@Pointcut(value="execution(* com.revature.*.*.*(..) )")
	public void myPointcut() {}
	
	
	
	@Around("myPointcut()")
	public Object logger(ProceedingJoinPoint p) throws Throwable {
		ObjectMapper mapper = new ObjectMapper();
		String methodName=p.getSignature().getName();
		String className = p.getTarget().getClass().toGenericString();
		
		Object[] array = p.getArgs();
		
		//Show sent
		log.info("method invoked  " + className+ " : " + methodName + "()" + "arguments : " + mapper.writeValueAsString(array));
		
		Object obj = p.proceed();
		
		//Show returned
		log.info(className + " : " + methodName + "()" + "arguments : " + mapper.writeValueAsString(obj));
		return obj;
	}

}
