import React from 'react'

function Filter() {
    
  return (
    <div>
        <h3>Filter by Discount</h3>
        <form >
            <input type="checkbox" id="10-percent" value="10" name="10-percent"/>
            <label for="10-percent">10% off or more</label>
            <input type="checkbox" id="20-percent" value="20" name="20-percent"/>
            <label for="20-percent">20% off or more</label>
            <input type="checkbox" id="30-percent" value="30" name="30-percent"/>
            <label for="30-percent">30% off or more</label>
            <input type="checkbox" id="40-percent" value="40" name="40-percent"/>
            <label for="40-percent">40% off or more</label>
            <input type="checkbox" id="50-percent" value="50" name="50-percent"/>
            <label for="50-percent">50% off or more</label>
            
        </form>
    </div>
  )
}

export default Filter