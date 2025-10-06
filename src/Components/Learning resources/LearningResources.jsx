import React from 'react';
import './Learn.css';

const LearningResources = () => {
  return (
    <main>
      <section className="learning-resources">

        {/* First Aid Training Section */}
        <Article
          title="Using your First Aid Kit & Contents"
          description="Below are instructions on the proper use of your first aid kit"
          videoTitle="Video Tutorial"
          videoSrc="https://www.youtube.com/embed/gn6xt1ca8A0"
          videoDescription="How to Use your First Aid Kit & Contents - First Aid Training - St John Ambulance"
        />

        {/* Creating an Emergency Kit Section */}
        <Article
          title="Creating an Emergency Kit"
          description="Having an emergency kit ready can save lives. Include items such as:"
          listItems={[
            'Non-perishable food and water.',
            'First aid supplies.',
            'Flashlight and batteries.',
            'Important documents in a waterproof container.'
          ]}
          videoTitle="Video Tutorial"
          videoSrc="https://www.youtube.com/embed/KKN7Ewht1DQ"
          videoDescription="How to build an Emergency Preparedness Kit"
        />

        {/* Flood Section */}
        <Article
          title="Flood"
          listItems={[
            "Evacuate: Follow local authorities' instructions and evacuation orders.",
            "Avoid Floodwaters: Do not walk or drive through floodwaters. They can be deeper and faster-moving than they appear.",
            'Seek Higher Ground: If you can\'t evacuate, move to higher ground and stay there.'
          ]}
        />

        {/* Landslide Section */}
        <Article
          title="Landslide"
          listItems={[
            'Evacuate Immediately: If a landslide is imminent, move to higher ground.',
            'Listen for Sounds: Be alert for unusual sounds that may indicate moving debris.',
            "Stay Indoors if Safe: If you're indoors and it's safe to stay, move to a higher floor."
          ]}
        />

        {/* Wildfire Section */}
        <Article
          title="Wildfire"
          listItems={[
            'Evacuate Early: If there\'s a wildfire nearby, leave early to avoid being trapped.',
            'Protect Yourself: Wear protective clothing and a mask to reduce smoke inhalation.',
            'Stay Informed: Listen to local news and updates from authorities.'
          ]}
        />

        {/* Identifying Safe Zones Section */}
        <Article
          title="Identifying Safe Zones"
          description="During a flood, it’s crucial to know the nearest safe zones where you can evacuate. These can include:"
          listItems={[
            'Nearby schools designated as emergency shelters.',
            'Government buildings like town halls.',
            'NGO shelters such as those run by the Red Cross.',
            'Community centers equipped to handle emergency situations.'
          ]}
          extraDescription="Check local maps and resources for the locations of these safe zones based on your current location."
        />

        {/* Evacuation Strategies Section */}
        <Article
          title="Evacuation Strategies"
          description="Evacuation should be done as early as possible to ensure safety. Here are some strategies:"
          listItems={[
            'Follow evacuation orders from local authorities immediately.',
            'Have a designated meeting place for family members.',
            'Know multiple routes to avoid flooded areas.',
            'Keep your vehicle fueled and ready for a quick departure.'
          ]}
        />

        {/* Minimizing Damage Section */}
        <Article
          title="Minimizing Damage"
          description="To minimize damage to property and ensure personal safety:"
          listItems={[
            'Move valuable items to higher floors.',
            'Turn off utilities (electricity, gas, water) before evacuating.',
            'Secure outdoor furniture and other items that can be swept away.',
            'Use sandbags to divert water away from your home.'
          ]}
        />

      </section>


    </main>
  );
};

const Article = ({ title, description, listItems, videoTitle, videoSrc, videoDescription, extraDescription }) => {
  return (
    <article>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {listItems && (
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {extraDescription && <p>{extraDescription}</p>}
      {videoTitle && (
        <div className="video-tutorial">
          <h4>{videoTitle}</h4>
          <iframe
            width="640"
            height="360"
            src={videoSrc}
            title={videoDescription}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </article>
  );
};

export default LearningResources;
