import {UpperCasePipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
  imports: [UpperCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  // Computed combina los valores de varios signals
  heroDescription = computed(() => `${this.name()} - ${this.age()}`);
  capitalizeName = computed(() => this.name().toUpperCase());

  changeHeroName(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeHeroAge(): void {
    this.age.set(60);
  }

  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
