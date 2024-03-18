import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent constructor called")
  }

  componentDidMount(){
    console.log("Parent component did mount")
  }

  componentDidUpdate(){
    console.log("Parent component updated")
  }

  render(){
    console.log("Parent render called")
    return (
      <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
        <div style={{width:"70vw", textAlign:"center"}}>
        <h1>About Us</h1>
        <p>
          You want to eat at your favorite restaurant. Still, you have the usually
          tedious task ahead of you – from getting ready to arrive at the
          restaurant through modern-day traffic to waiting for your table. You
          make the unexpected decision to cancel your dining out plans and instead
          eat at home. Food ordering options are available, but you must still
          pick them up from the restaurant. As a result, eating at home often
          appears to be a better option after a long day at work. But then there
          is an app that comes to your rescue every time! The brand wants to
          ensure that no part of your meal is missing. The brand that comes to
          your aid whenever hunger tests your patience. The brand wants to ensure
          you don't miss out on any of your precious moments. The brand allows you
          to keep track of everything with a single tap. The brand not only looks
          after its customers but also its employees. They understand that there
          is a lot in a name. You guessed it right; it's Swiggy! Swiggy's goal is
          not only to surprise taste buds but also to deliver happiness. This is
          the basis on which the Swiggy business model is built. So, what is
          swiggy, exactly?
        </p>
        <p>
          The easiest answer to the question, "What is Swiggy" is that it is
          India's largest online food ordering and delivery platform. Founded in
          July 2014, Swiggy is based in Bangalore and operates in 500 Indian
          cities as of September 2021. Swiggy was founded by BITS Pilani graduates
          Nandan Reddy and Sriharsha Majety, who had the brilliant idea of
          changing the way India eats through hyperlocal food delivery. They saw
          an untapped gap between food ordering and delivery in India and decided
          to make an indelible mark there. Swiggy's business model is based on
          bridging that very gap. As revolutionary as this idea was, they wanted
          to keep it simple for users, so the idea of Swiggy, an app that makes
          food available with a single tap, was born. Swiggy is the apex of Bundl
          Technologies, the previous venture of these two geniuses. It's been
          quite a journey from an abstract idea to over 5 lakh mobile app
          installations for Swiggy. Now that we had discussed what is swiggy and
          when and by whom it was founded, let's move to the next part of the
          story. Let us dive deep into how swiggy works. Let us dwell deep into
          Swiggy's business model to understand better what is swiggy and what
          model it is made to function.
        </p>
        <p>
          Swiggy's business model is based on hyperlocal on-demand food delivery.
          It aggregates restaurants and organizes a fleet of delivery partners who
          deliver on-demand food (in less than 30 minutes). This unicorn startup,
          owned and operated by Bundl Technologies Private Limited, followed in
          Uber's footsteps and developed a business model based on a dual
          partnership model. The partners are classified into two groups:
          Restaurant Partners: Restaurants that choose to deliver to customers who
          use the Swiggy app or website are known as restaurant partners. Delivery
          Partners: They comprise the delivery fleet, tasked with picking up the
          order from the partner restaurant and delivering it to the end-user.
        </p>
        <p>
          Swiggy is genuinely and adoringly adored. Swiggy is special and unique
          because of its long-term goals and willingness to learn and improve
          incrementally. Swiggy has a plethora of excellent benefits, so how can
          you not love it? Swiggy's lack of a minimum order requirement is one of
          the reasons it receives as many as 14 million orders per month. Swiggy
          receives many orders for less than Rs 100, which explains why it is the
          most popular app for ordering food. Swiggy is obsessed with customers
          and believes that everything else is merely a byproduct of doing
          business correctly. Swiggy bases its success on the customer impact
          parameter. It allows you to indulge in one-serve orders without
          incurring any additional fees. Swiggy's main selling point has always
          been its ease of use and delivery capability. That is exactly what the
          swiggy business model is based on. Customers are always presented with
          enticing offers. Partner restaurants will be able to reduce their
          operational costs as well. In addition to all of this, it offers instant
          lightning-fast deliveries and real-time tracking, which is why it is
          always a trusted companion.
        </p>
        </div>
        <div className="user-cards">
          <UserClass name={"First"} />
          <UserClass name={"Second"} />
          <UserClass name={"Third"} />
        </div>
      </div>
    );
  }
}
export default About;