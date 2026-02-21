import { AgeRange, DynamicRole, FashionStyle, RelationshipEnergy } from "./enums";

export interface SurfaceIdentity {
  name: string;
  ageRange: AgeRange;
  occupation: string;
  publicPersonality: [string, string, string];
  fashionStyle: FashionStyle;
  scent: string;
}

export interface PhysicalClues {
  heightCm: number;
  build: string;
  distinguishingMarks?: {
    scar?: string;
    tattoo?: string;
    birthmark?: string;
  };
  weakSpot?: string;
  secretlyLovedTouch?: string;
}

export interface BehaviorProfile {
  nervousResponse: string;
  arousalResponse: string;
  jealousyResponse: string;
  controlBehavior: string;
  submissionBehavior: string;
  dynamicRole: DynamicRole;
  craves: string;
  fears: string;
  hardBoundary: string;
}

export interface SecretHistory {
  pastRelationshipEnergy: RelationshipEnergy;
  biggestEmotionalWeakness: string;
  unspokenSecret: string;
  instantMeltTrigger: string;
  destabilizingTone: string;
  composureLossMoment: string;
  vulnerableFantasy: string;
  deniedKink: string;
}

export class CharacterProfile {
  public readonly surface: SurfaceIdentity;
  public readonly physical: PhysicalClues;
  public readonly behavior: BehaviorProfile;
  public readonly secrets: SecretHistory;

  constructor(params: {
    surface: SurfaceIdentity;
    physical: PhysicalClues;
    behavior: BehaviorProfile;
    secrets: SecretHistory;
  }) {
    this.surface = Object.freeze(params.surface);
    this.physical = Object.freeze(params.physical);
    this.behavior = Object.freeze(params.behavior);
    this.secrets = Object.freeze(params.secrets);
  }

  public get summary(): string {
    const [trait1, trait2, trait3] = this.surface.publicPersonality;
    return `${this.surface.name} is ${trait1}, ${trait2}, and ${trait3}.`;
  }

  public isDominant(): boolean {
    return this.behavior.dynamicRole === "dom";
  }

  public isSubmissive(): boolean {
    return this.behavior.dynamicRole === "sub";
  }

  public isSwitch(): boolean {
    return this.behavior.dynamicRole === "switch";
  }

  public static create(
    data: ConstructorParameters<typeof CharacterProfile>[0]
  ): CharacterProfile {
    return new CharacterProfile(data);
  }
}