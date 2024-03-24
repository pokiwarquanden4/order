import styles from './AccountDetails.module.scss'

function AccountDetails() {
    return <div className="px-3 py-4 d-flex flex-column">
        <label
            className='align-self-center'
            htmlFor="avatar"
            style={{
                width: '100px'
            }}
        >
            <div className='d-flex justify-content-center mb-4'>
                <img className={`${styles.fitImg}`} src="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" alt="error"></img>
            </div>
            <input type="file" id="avatar" style={{ display: 'none' }} accept=".png, .jpg, .jpeg"></input>
        </label>

        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
        <input type="number" id="phoneNumber" className="form-control"></input>

        <label htmlFor="name" className="form-label pt-4">Name</label>
        <input type="text" id="name" className="form-control"></input>

        <label htmlFor="address" className="form-label pt-4">Address</label>
        <input type="text" id="address" className="form-control"></input>

        <label htmlFor="email" className="form-label pt-4">Email</label>
        <input type="email" id="email" className="form-control"></input>

        <label htmlFor="gender" className="form-label pt-4">Gender</label>
        <select defaultValue={1} id="gender" className="form-select" aria-label="Default select example">
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
        </select>
    </div>
}

export default AccountDetails