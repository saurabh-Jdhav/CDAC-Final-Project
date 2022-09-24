package com.app.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long CardId;

	@Column(unique = true)
	private long CardNo;

	
	@Temporal(TemporalType.DATE)
	private Date validTill;

	@Column(unique = true)
	private int Cvv;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "UserId")
	private User user;

	private String NameOnCard;

	private String dateString;

	public String getDateString() {
		return dateString;
	}

	public void setDateString(String dateString) {
		this.dateString = dateString;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public long getCardNo() {
		return CardNo;
	}

	public void setCardNo(long cardNo) {
		CardNo = cardNo;
	}

	public Date getValidTill() {
		return validTill;
	}

	public void setValidTill(Date validTill) {
		this.validTill = validTill;
	}

	public int getCvv() {
		return Cvv;
	}

	public void setCvv(int cvv) {
		Cvv = cvv;
	}

	public String getNameOnCard() {
		return NameOnCard;
	}

	public void setNameOnCard(String nameOnCard) {
		NameOnCard = nameOnCard;
	}

	public long getCardId() {
		return CardId;
	}

	public void setCardId(long cardId) {
		CardId = cardId;
	}

	public Payment(long cardNo, Date validTill, int cvv, String nameOnCard, long cardId) {
		super();
		CardNo = cardNo;
		//this.validTill = validTill;
		Cvv = cvv;
		NameOnCard = nameOnCard;
		CardId = cardId;
	}

	public Payment() {

	}

}
