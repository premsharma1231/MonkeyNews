import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

  

  class About extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeIndex: null,
      };
      this.contentRefs = [];
    }

    handleAccordionClick = (index) => {
      this.setState({ activeIndex: this.state.activeIndex === index ? null : index });
    };

    colorChanging = () => {
      if(this.props.mode === 'dark'){
        document.body.style.backgroundColor = 'rgb(4, 39, 67)';
      } else {
        document.body.style.backgroundColor = 'white';
      }
    }
  
    render() {
      this.colorChanging();
      const accordionItems = [
        {
          title: 'Important',
          content: `Due to a server issue, we are only able to watch news for the United States. As a result, we have disabled the nation drop-down menu, but we will be resuming it soon. Please stay connected.`,
        },
        {
          title: 'About "NewsApi"',
          content: `Hi there to all of you.<strong> This is my personal learning and practice app</strong>, so welcome to our newsapp<code> called monkeyNews</code>.\n - We used the newsAPI to fetch all the newsData and show the data to you. \n - I would like to suggest that you all use this API as it is the best api for newsApplications because it is giving you the most efficient features and will help you to build next level modifications and features like <code> <i> PageSize, Page,Q stands for inquiry because you can search for any topic, nation name because you can receive news about your country firsthand if you'd like, and language because you can view the news in your mother tongue </i></code>.`,
        },
        {
          title: 'Languages & Features.',
          content: `<strong>Below languages are used to make our web application:</strong>\n<code> 🖸 React,\n 🖸 Tailwind CSS,\n 🖸 Inline CSS,\n 🖸 JAVAScript,\n 🖸 BootStrap.</code>\n <strong>Below Features,</strong> \n <code>🖸 Dark and Light modes, \n 🖸 Infinte Scroll (Very Modern Feature), \n 🖸 React Routing (Switching Pages), \n 🖸 TopLoading Bar</code>. \n As all the above points are perfectly checked and working perfectly, I hope you will use this to see the news on a regular basis as I do.\n Thank you.`,
        },
        {
          title: 'About Author',
          content:`Hi, my name is <code>Purvish Sharma</code>. I developed this app, and it's a pleasure working on such a project. Since I'm still learning, I'm trying to work on projects that range from simple to complex. I hope you enjoyed this project, and <strong>I apologize for any problems you may have had</strong>. <i>If you're interested in developing a website for your company or any other kind of business, please feel free to get in touch with me using the number and email listed below</i>\n Contact - 9879959544, \n Mail - premsharma786zx@gmail.com,\nThank you,\n<code>Purvish</code>.`,
        },
      ];

      return (
        <div class="accordion relative accordion-flush" id="accordionFlushExample">
          <h1 className={`absolute -top-16 left-36 font-mono text-5xl ${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}><strong>About</strong></h1>
        <div className=" accordion flex flex-col justify-center mr-auto ml-auto mt-28 w-5/6 border-2 border-solid border-gray-500 rounded">
          {accordionItems.map((item, index) => (
            <div key={index} className="accordion-item">
              <div className={`
                flex justify-between align-middle accordionheader cursor-pointer text-black h-16 pr-12 pl-12 
                ${this.state.activeIndex === index ? 'bg-blue-300 active' : 'white'}
                transition-colors duration-300
                `}
                onClick={() => this.handleAccordionClick(index)}>
                <h3 className='leading-12'>{item.title}</h3>
                <FontAwesomeIcon icon={faCaretDown} className='text-3xl leading-12 mt-3' 
                style={{
                  transition: 'all 200ms ease-in-out',
                  transform: this.state.activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                }}/>
                </div>
              <div key={index}
              className={`border-t-2 accordion-content overflow-hidden`}
              ref={(el) => (this.contentRefs[index] = el)}
              style={{
                transition: 'max-height 300ms ease-in-out',
                maxHeight: this.state.activeIndex === index
                  ? `${this.contentRefs[index]?.scrollHeight}px`
                  : '0px',
              }}>
                  <p dangerouslySetInnerHTML={{ __html: item.content.split('\n').join('<br/>') }} className='cursor-text pl-12 pt-4 pb-4 pr-12'></p>
                </div>
            </div>
          ))}
        </div>
        </div>
      );
    }
  }

  export default About;