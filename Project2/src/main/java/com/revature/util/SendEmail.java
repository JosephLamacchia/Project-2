package com.revature.util;
import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class SendEmail {

		
		public static void send(String email, String content, String subject) {    
		      // Recipient's email ID needs to be mentioned.
		      String to = email;
	
		      // Sender's email ID needs to be mentioned
		      String from = "billbanes123@gmail.com";
	
		    
	
		      // Get system properties
		      Properties properties = System.getProperties();
	
		      // Setup mail server
		      properties.setProperty("mail.transport.protocol", "smtp");     
		      properties.setProperty("mail.host", "smtp.gmail.com"); 
		      properties.setProperty("mail.smtp.auth", "true");  
		      properties.setProperty("mail.smtp.port", "587");  
		      properties.setProperty("mail.debug", "true");  
		      properties.setProperty("mail.smtp.socketFactory.port", "587"); 
		      properties.setProperty("mail.smtp.starttls.enable", "true");
	
	
	
		      // Get the default Session object.
		      Session session = Session.getDefaultInstance(properties,
		    		  new javax.mail.Authenticator() {
		    	  protected javax.mail.PasswordAuthentication getPasswordAuthentication() {  
		    	       return new javax.mail.PasswordAuthentication(from,"Billybanes91!");  
		    	   }  
		      }
		      );
	
		      try {
		         // Create a default MimeMessage object.
		         MimeMessage message = new MimeMessage(session);	
	
		         // Set From: header field of the header.
		         message.setFrom(new InternetAddress(from));
	
		         // Set To: header field of the header.
		         message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
	
		         // Set Subject: header field
		         message.setSubject(subject);
	
		         // Now set the actual message
		         message.setContent("<h2>Your Password is : " + content + "</h2>", "text/html");  
	
		         // Send message
		         InternetAddress addressFrom = new InternetAddress(from);  
		         message.setSender(addressFrom);  
	
		         Transport transport = session.getTransport();  
	
		         transport.connect();
		         Transport.send(message);
			     transport.close();
	
		         System.out.println("Sent message successfully....");
		      } catch (MessagingException mex) {
		         mex.printStackTrace();
		      }
	   }
}
