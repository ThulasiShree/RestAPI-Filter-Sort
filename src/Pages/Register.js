import React, { useState } from 'react'

export const Register = () => {

    // Country Filter
    const countries = [
        "India",
        "USA",
        "UK",
        "Singapore",
        "Canada"
    ];

    const [filterText, setFilterText] = useState("");
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [selectedCountry, setSelectedCountry] = useState("");

    const handleFilterChange = (e) => {
        const text = e.target.value;
        setFilterText(text);
        setFilteredCountries(
            countries.filter(country =>
                country.toLowerCase().includes(text.toLowerCase())
            )
        );
    };

    const handleCountrySelect = (country) => {
        setFilterText(country);
        setSelectedCountry(country);
        setFilteredCountries([]);
    };

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let regObj = {
            name,
            pwd,
            email,
            phone,
            country: selectedCountry,
            address,
            gender
        };
        console.log(regObj);
    };

    return (
        <div className='row'>
            <div className='offset-lg-3 col-lg-6'>
                <form className='container'>
                    <div className='card'>
                        <div className='card-header'>
                            <h1>User Registration</h1>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>
                                            User Name
                                            <span className='err-msg'>*</span>
                                        </label>
                                        <input value={name} onChange={e => setName(e.target.value)} className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>
                                            Password
                                            <span className='err-msg'>*</span>
                                        </label>
                                        <input value={pwd} onChange={e => setPwd(e.target.value)} className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>
                                            E-Mail
                                            <span className='err-msg'>*</span>
                                        </label>
                                        <input value={email} onChange={e => setEmail(e.target.value)} className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>
                                            Phone
                                        </label>
                                        <input value={phone} onChange={e => setPhone(e.target.value)} className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6 py-4'>
                                    <div className='form-group'>
                                        <label>
                                            Gender
                                            <span className='err-msg'>*</span>
                                        </label>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" value="male" className='app-chk' checked={gender === "male"} onChange={e => setGender(e.target.value)} name="gender" />
                                        <label>Male</label>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" value="female" className='app-chk' checked={gender === "female"} onChange={e => setGender(e.target.value)} name="gender" />
                                        <label>Female</label>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>
                                            Country
                                        </label>    
                                        <input type='text' value={filterText} onChange={handleFilterChange} className='form-control' />
                                            {filteredCountries.length > 0 && (
                                                <ul>
                                                    {filteredCountries.map((country, index) => (
                                                        <li key={index} className='list-group-item' onClick={() => handleCountrySelect(country)}>{country}</li>
                                                    ))}
                                                </ul>
                                            )}
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>
                                            Address
                                        </label>
                                        <textarea value={address} onChange={e => setAddress(e.target.value)} className='form-control' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer d-flex flex-row justify-content-evenly'>
                            <button className='btn btn-primary' onClick={handleSubmit}>Register</button>
                            <button className='btn btn-danger'>Back</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

