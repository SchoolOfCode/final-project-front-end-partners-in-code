import Profile from '../Profile/Profile.js';
import aboutUs from '../../libs/aboutUs.js';

export default function ListItem() {
  return (
    <>
      {aboutUs.map(function (item) {
        return (
          <div>
            <Profile
              key={item.id}
              img={item.image.img}
              alt={item.image.alt}
              name={item.name}
              github={item.github}
              linkedin={item.linkedin}
            />
          </div>
        );
      })}
    </>
  );
}
