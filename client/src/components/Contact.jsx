import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] =  useState('');

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  console.log(listing);
  useEffect(() => {
   const fetchLandlord = async () => {
    try {
      const res = await fetch(`/api/user/${listing.userRef}`);
      const data = await res.json();
      setLandlord(data);
       
    } catch (error) {
      console.log(error);
    }
   };
    fetchLandlord();
  }, [listing.userRef]);
  
  Contact.propTypes = {
    listing: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      regularPrice: PropTypes.number.isRequired,
      discountePrice: PropTypes.number.isRequired,
      bathrooms: PropTypes.number.isRequired,
      bedrooms: PropTypes.number.isRequired,
      furnished: PropTypes.bool.isRequired,
      parking: PropTypes.bool.isRequired,
      type: PropTypes.string.isRequired,
      offer: PropTypes.bool.isRequired,
      imageUrls: PropTypes.array.isRequired,
      userRef: PropTypes.string.isRequired,
    }).isRequired,
  };
   console.log(landlord);
  return (
    <>
    {landlord && (
      <div className='flex flex-col gap-2'>
        <p>
          Contact <span className='font-semibold'>{landlord.username}</span> {' '}
          for {' '}<span className='font-semibold'>{listing.name.toLowerCase()}</span>
          </p>
          <textarea 
          name='message' 
          id='message' 
          rows='2' 
          value={message}
          onChange={onChange}
          placeholder='Enter your message here...'
          className='w-full border p-3 rounded-lg'
          >
          </textarea>
          <Link
          to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
          className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
          >
            Send Message          
          </Link>
      </div>
    )
    }
    </>
  )
}
