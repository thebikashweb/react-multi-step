import React from "react"

import FormStepper from "./components/FormStepper"

import "./App.css"

function App() {
	const [step, setStep] = React.useState(0)

	//handle step change
	const handleStep = (step: number) => {
		setStep(step)
	}

	return (
		<div className="app">
			<div className="wrapper">
				<div className="onboarding__left">
					<div className="onboarding__left-image">
						<img
							src="https://images.unsplash.com/photo-1587614382231-d1590f0039e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNpbmclMjBjb21wdXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
							alt="user on computer"
						/>
					</div>
				</div>
				<div className="onboarding__right">
					{
						/** When the step is 0 , show main screen */
						step === 0 && (
							<div className="first-step">
								<h2>Welcome to Bikashweb.</h2>
								<p>Please signup to continue</p>

								<div className="first-step__buttons">
									<button className="btn btn-fb">Sign up with Facebook</button>
									<button className="btn btn-twitter">
										Sign up with Twitter
									</button>
									<button
										className="btn btn-primary"
										onClick={() => handleStep(1)}>
										Sign up with Email
									</button>
								</div>
							</div>
						)
					}
					{
						/** if the stepper is higher than 0, render stepper */
						step > 0 && <FormStepper onStepChange={handleStep} step={step} />
					}
				</div>
			</div>
		</div>
	)
}

export default App
