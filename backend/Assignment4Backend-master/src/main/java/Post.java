
public class Post {
	String date;
	String image;
	String name;
	int rating;
	String text;
	int userID;
	
	
	
	public Post(String date, String image, String name, int rating, String text, int userID) {
		this.date = date;
		this.image = image;
		this.name = name;
		this.rating = rating;
		this.text = text;
		this.userID = userID;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
	
	
}
