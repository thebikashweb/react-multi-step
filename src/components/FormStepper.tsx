import React from "react"

import FormStepperHeader from "./FormStepperHeader"

type FormStepperProps = {
	onStepChange: Function
	step: number
}

const FormStepper: React.FC<FormStepperProps> = ({onStepChange, step}) => {
	//data state
	const [data, setData] = React.useState({
		fullname: "",
		email: "",
		password: "",
		jobtitle: "",
		education: "",
		location: "",
		newOffers: false,
		shareProfile: false,
	})

	//handle stpe change

	//handle input change
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const _tempObject = {...data} as any
		_tempObject[e.target.name] = e.target.value
		setData(_tempObject)
	}

	//handle checkbox for profile
	const handleShareProfileChange = () => {
		const _tempObject = {...data}
		_tempObject.shareProfile = !_tempObject.shareProfile
		setData(_tempObject)
	}
	//handle checkbox for offer
	const handleOfferChange = () => {
		const _tempObject = {...data}
		_tempObject.newOffers = !_tempObject.newOffers
		setData(_tempObject)
	}

	//handle signup
	const handleSignup = () => {
		console.log("Data", data)
	}
	return (
		<div className="form-stepper">
			<FormStepperHeader step={step} />

			<div className="form-stepper__body">
				{/* Basic info form i.e step 1 */}
				{step === 1 && (
					<div className="form-stepper__step1">
						<h2>Basic Info</h2>
						<div className="input-group">
							<label htmlFor="fullname">Full name</label>
							<input
								value={data.fullname}
								type="text"
								name="fullname"
								onChange={handleChange}
							/>
						</div>

						<div className="input-group">
							<label htmlFor="email">Email</label>
							<input
								value={data.email}
								type="email"
								required
								name="email"
								onChange={handleChange}
							/>
						</div>
						<div className="input-group">
							<label htmlFor="password">Password</label>
							<input
								value={data.password}
								type="password"
								required
								name="password"
								onChange={handleChange}
							/>
						</div>
					</div>
				)}
				{/* Background form i.e step 2 */}
				{step === 2 && (
					<div className="form-stepper__step2">
						<h2>Background</h2>
						<div className="input-group">
							<label htmlFor="jobtitle">Job title</label>
							<input
								value={data.jobtitle}
								type="text"
								name="jobtitle"
								onChange={handleChange}
							/>
						</div>

						<div className="input-group">
							<label htmlFor="education">Education</label>
							<input
								value={data.education}
								type="text"
								required
								name="education"
								onChange={handleChange}
							/>
						</div>
						<div className="input-group">
							<label htmlFor="location">Location</label>
							<input
								value={data.location}
								type="text"
								required
								name="location"
								onChange={handleChange}
							/>
						</div>
					</div>
				)}

				{/* Final  form i.e step 3 */}
				{step === 3 && (
					<div className="form-stepper__step3">
						<h2>Finalizing</h2>
						<div className="input-group check-group">
							<input
								type="checkbox"
								name="newOffer"
								checked={data.newOffers}
								onChange={handleOfferChange}
							/>
							<label htmlFor="jobtitle">Send me new job offers</label>
						</div>
						<div className="input-group check-group">
							<input
								type="checkbox"
								name="shareProfile"
								checked={data.shareProfile}
								onChange={handleShareProfileChange}
							/>
							<label htmlFor="jobtitle">Share my profile to companies</label>
						</div>
					</div>
				)}
			</div>
			<div className="form-stepper__action">
				{step > 1 && (
					<button
						className="btn btn-secondary"
						onClick={() => onStepChange(step - 1)}>
						Back
					</button>
				)}

				{step < 3 ? (
					<button
						className="btn btn-primary"
						onClick={() => onStepChange(step + 1)}>
						Next
					</button>
				) : step === 3 ? (
					<button className="btn btn-primary" onClick={handleSignup}>
						Signup
					</button>
				) : (
					""
				)}
			</div>
		</div>
	)
}

export default FormStepper
