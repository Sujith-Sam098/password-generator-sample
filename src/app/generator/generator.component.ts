import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.css'
})
export class GeneratorComponent {
  password: string = '';
  hasUpperCase: boolean = true;
  hasLowerCase: boolean = true;
  hasNumbers: boolean = true;
  hasSpecialChars: boolean = true;
  strength: string = '';
  passwordLength: number = 12; // Default length

  private charset = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    special: '!@#$%^&*()_+-=[]{}|;:,.<>?'
  };

  generatePassword(): void {
    let charset = '';
    let strengthCount = 0;

    if (this.hasUpperCase) {
      charset += this.charset.upper;
      strengthCount++;
    }
    if (this.hasLowerCase) {
      charset += this.charset.lower;
      strengthCount++;
    }
    if (this.hasNumbers) {
      charset += this.charset.numbers;
      strengthCount++;
    }
    if (this.hasSpecialChars) {
      charset += this.charset.special;
      strengthCount++;
    }

    if (charset === '') {
      alert('Please select at least one character type.');
      return;
    }

    let password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    this.password = password;
    this.strength = this.calculateStrength();
  }

  private calculateStrength(): string {
    if (this.passwordLength < 8) {
      return 'Weak';
    } else if (this.passwordLength < 12) {
      return 'Moderate';
    } else if (this.passwordLength < 16) {
      return 'Medium';
    } else {
      return 'Strong';
    }
  }
}
