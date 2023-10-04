import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
declare var $: any; 
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss']
})
export class FormPage implements OnInit {

  public formRegister: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }
  options = [
    { id: 'option1', text: 'Option 1' },
    { id: 'option2', text: 'Option 2' },
    { id: 'option3', text: 'Option 3' }
  ];
  ngOnInit() {

  
   
    $('#mySelect2').on('change', (event) => {
      console.log('event',event.target);
      // this.formRegister.get('skills').setValue(event.target.value);
    });
    var data = [
      {
          id: 0,
          text: 'skill 1'
      },
      {
          id: 1,
          text: 'skill 2'
      },
      
  ];
    this.formRegister = this.formBuilder.group({
      name: this.formBuilder.group({
        first: '',
        last: ''
      }),
      email: '',
      phone: this.formBuilder.group({
        mobile: ''
      }),
      skills: this.formBuilder.array([])
    });
    const defaultValues = ['skill 1', 'skill 2'];
    $('#mySelect2').select2({
  })
  const defaultSelectedSkill = this.formRegister.get('skills').value;
  $('#mySelect2').val(defaultSelectedSkill).trigger('change.select2');
  // .data("select2").$container.find(".select2-selection__choice").css('background-color', '#3B71CA');

  // Get the Select2 container and find the .select2-selection__choice elements
  // const select2Container = $('#mySelect2').data("select2").$container;
  // const selectedChoices = select2Container.find(".select2-selection__choice");
  // const selectedChoices2 = select2Container.find(".select2-selection__choice__remove");
  // const selectedChoices3 = select2Container.find(".select2-selection__choice__remove:hover");
  
  // Set multiple CSS properties for the selected choices
  // selectedChoices.css({
  //   'background-color': '#23a4cc',
  //   'color': '#FFFFFF', // Change text color
  //   // 'border-radius': '5px', // Add rounded corners
  //   // 'padding': '2px 8px', // Add padding
  // });
  // selectedChoices2.css({

  //   'color':'#FFFFFF',

  // })
  // selectedChoices3.css({

  //   'background-color':'23a4cc',

  // })
    // $("#mySelect2-selected").select2({
    //   data: data
    // })
    // const defaultSelectedSkill = this.formRegister.get('skills').value;
    // $('#mySelect2').val(defaultValues).trigger('change.select2');

    $('#mySelect2').on('select2:unselect', (e) => {

      const unselectedOption = e.params.data;
      console.log('unselect',unselectedOption);
      const skillsControl = this.formRegister.get('skills');
      const currentSkills = skillsControl.value as string[];
      const index = currentSkills.indexOf(unselectedOption.text);
      if (index !== -1) {
        currentSkills.splice(index, 1);
        console.log('currentSkills',currentSkills);
        skillsControl.setValue(currentSkills);
        // Update the input field with selected skills as a comma-separated string
        this.formRegister.get('skillsInput').setValue(currentSkills.join(', '));
    }
   
  }
    )
    $('#mySelect2').on('select2:select', (e) => {
      const selectedOption = e.params.data;
      console.log('select',selectedOption);
      const skillsControl = this.formRegister.get('skills');
      const currentSkills = skillsControl.value as string[];
      currentSkills.push(selectedOption.text); // Assuming the id is the value you want to store
      skillsControl.setValue(currentSkills);
      
      // Update the input field with selected skills as a comma-separated string
      this.formRegister.get('skills').setValue(currentSkills.join(', '));

    })
  }

}
