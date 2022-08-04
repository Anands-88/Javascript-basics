/* 
    Develop a solution which validates a given Vendor ID, with positive and negative test cases. For
    each negative case, display the mistake in the Vendor ID
    The Vendor ID is a ten-character long alpha-numeric unique identifier.A typical Vendor ID would
    look like AFZPK7190K.. The logic behind the array of numbers and alphabets is as follows:
    
    ● First three characters i.e. "AFZ" in the above Vendor ID are alphabetic series running
    from AAA to ZZZ.
    ● Fourth character i.e. "P" in the above Vendor ID represents the category of the Vendor.
        ○ "P" stands for Individual.
        ○ "F" stands for Firm.
        ○ "C" stands for Company.
        ○ "H" stands for HUF.
        ○ "A" stands for AOP.
        ○ "T" stands for TRUST etc.
    ● Fifth character i.e. "K" in the above Vendor ID represents the first character of the
    holder's last name/surname.
    ● Next four characters i.e. "7190" in the above Vendor ID are sequential numbers running
    from 0001 to 9999.
    ● Last character i.e. "K" in the above Vendor ID is an alphabetic check digit.
    Sample Test Cases
    The code should be tested against the following inputs, and the required message (as displayed
    against each Vendor ID below ) should be printed.
    Case 1
    Name: Kartik Kumar
    Status: Individual
    1. AFZPK7190K - Valid Vendor ID
    2. AFZPZ7190K - Invalid Vendor ID | 5th character mismatch
    3. AAFCK8210J - Invalid Vendor ID | Status mismatch
    4. AFZPK7190 - Invalid Vendor ID | Character length mismatch
    5. AFZPK71901 - Invalid Vendor ID | Last character not an alphabet
    6. A2ZPK7190K - Invalid Vendor ID | Either of first 3 character not an alphabet
    7. 1FZPK7190K - Invalid Vendor ID | Either of first 3 character not an alphabet
    8. AFZPK71A0K - Invalid Vendor ID | Either of 6th to 9th character not a digit
    9. AFZPK7Z90K - Invalid Vendor ID | Either of 6th to 9th character not a digit
    10. AFZZK7190K - Invalid Vendor ID | 4th character not a valid status
    Case 2
    Name: Krishworks Technology
    Status: Company
    1. AAFPK8210J - Invalid Vendor ID | 
                    Status mismatch & 5th character mismatch
    2. AAFCT8210J-Valid Vendor ID
*/



const category = ["Firm","Company","HUF","AOP","Trust"]
const symbol = ["P","F","C","H","A","T"]
const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const Id = "AFAQK7190K"; // INPUT ID
let name = "Karthik Kumar"; // INPUT NAME
const status = "Individual"; // INPUT STATUS

let result = ""

function validate(id)
  {
    if(id.length != 10)
    {
      result = result + " Character length mismatch &"
    }
    else
    {
      if(!alpha.includes(id[0]) || !alpha.includes(id[1]) || !alpha.includes(id[2]))
      {
        result = result + " Either of first 3 character not an alphabet &"
      }

      if(symbol.includes(id[3]))
      {
        
        if(status == "Individual" && id[3] != "P")
        {
          result = result + " Status mismatch &"
        }
        else if(category.includes(status) && id[3] != status[0])
        {
          result = result + " Status mismatch &"
        }
      }
      else
      {
        result = result + " 4th character not a valid status &"
      }

      name = name.split(" ")
      let last = name[name.length-1]
      if(id[4] != last[0])
      {
        result = result + " 5th character mismatch &"
      }

      for(let num = 5; num < 8;num++)
        {
          let digit = +id[num]
          if(isNaN(digit))
          {
            result = result + " Either of 6th to 9th character not a digit &"
            break;
          }
        }

      if(!alpha.includes(id[id.length-1]))
      {
        result = result + " Last Character not an alphabet &"
      }
    }
    console.log(result)
    return result == "" ? "Valid Vendor ID": `Invalid Vendor ID | 
                            ${result.slice(0,result.length-2)}`
  }

console.log(validate(Id))
