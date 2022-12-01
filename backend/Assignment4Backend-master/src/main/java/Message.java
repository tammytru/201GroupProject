
public class Message {

	private String name;
	private String text;
	private int time;
	
	public Message(String name, String text, int time)
	{
		this.name = name;
		this.text = text;
		this.time = time;
	}
	
	public void setName(String name)
	{
		this.name = name;
	}
	public String getName()
	{
		return name;
	}
	public void setText(String text)
	{
		this.text = text;
	}
	public String getText()
	{
		return text;
	}
	public void setTime(int time)
	{
		this.time = time;
	}
	public int getTime()
	{
		return time;
	}
}
