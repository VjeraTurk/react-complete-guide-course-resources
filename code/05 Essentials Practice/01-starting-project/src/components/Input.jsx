export default function Input({onChangeInput, input}){

    function handleInputChange(event){
        onChangeInput(event.target.id, event.target.value)
    }

    return (<>
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial investment</label>
                    <input
                    id="initialInvestment"
                    required
                    value={input.initialInvestment}
                    onChange={handleInputChange}
                    type="number" ></input>
                </p>
                <p>
                <label>Annual interest</label>
                <input
                    id="annualInvestment"
                    required
                    value={input.annualInvestment}
                    onChange={handleInputChange}
                    type="number" ></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected return</label>
                    <input
                    id="expectedReturn"
                    required
                    value={input.expectedReturn}
                    onChange={handleInputChange}
                    type="number" ></input>
                </p>
                <p>
                    <label>Duration</label>
                    <input
                    id="duration"
                    required
                    value={input.duration}
                    onChange={handleInputChange}
                    type="number" ></input>
                </p>

            </div>
        </section>

    </>)
}