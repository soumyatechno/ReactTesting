export const Application = () => {
  return (
    
      
      <>
      <div className="heading">
          <h1>Job Description</h1>
          <h2>Personal Details</h2>
          <p>All field are mendatory!</p>
          <span title="close">X</span>
      </div>
      <div data-testid="custom-element">Custom Element</div>
      <img 
      src="data:image/jpeg;base64,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" alt="a person with laptop" />
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value="Soumya"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
      </>
    
  )
}