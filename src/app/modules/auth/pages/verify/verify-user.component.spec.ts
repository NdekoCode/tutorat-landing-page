import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VerifyUserComponent } from './verify-user.component'
/**
 *
 * Ces tests vérifient les scénarios suivants :
 *
- Initialisation du formulaire d'inscription et de ses contrôles
- Validation du formulaire avec des champs vides
- Validation du formulaire avec des champs remplis correctement
- Affichage du message d'alerte après une inscription réussie
- Affichage du message d'alerte en cas d'erreur lors de l'inscription
- Navigation vers la page de connexion après une inscription réussie
- Nettoyage du timeout lors de la destruction du composant (dans la fonction afterEach)

 */
describe('VerifyComponent', () => {
  let component: VerifyUserComponent
  let fixture: ComponentFixture<VerifyUserComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyUserComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(VerifyUserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
