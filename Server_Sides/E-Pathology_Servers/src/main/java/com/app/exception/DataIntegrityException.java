package com.app.exception;

public class DataIntegrityException 
{

	String messageToU;
	int statusCode;
	String whomToContact;
	String TroubleShoot;
	
	public DataIntegrityException(String messageToU, int statusCode, String whomToContact, String troubleShoot) {
		super();
		this.messageToU = messageToU;
		this.statusCode = statusCode;
		this.whomToContact = whomToContact;
		TroubleShoot = troubleShoot;
	}
	
	
}
