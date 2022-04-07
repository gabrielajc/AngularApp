import { TestBed } from '@angular/core/testing';
import { CpfPipe } from './cpf.pipe';

describe('CpfPipe', () => {
  let pipe: CpfPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CpfPipe] });
    pipe = TestBed.inject(CpfPipe);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms X to Y', () => {
    const value: any = 'X';
    const args: string[] = [];
    expect(pipe.transform(value, args)).toEqual('Y');
  });
});
