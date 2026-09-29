export type Priority = 'HIGH' | 'MEDIUM' | 'LOW';
export type RechargeClass = 'HIGH' | 'MEDIUM' | 'LOW';
export type ValidationStatus = 'PENDING' | 'CONFIRMED' | 'REVIEW_REQUIRED';
export type LayerType =
  | 'springs'
  | 'rainfall'
  | 'elevation'
  | 'slope'
  | 'geology'
  | 'landuse'
  | 'recharge'
  | 'priority';

export interface Spring {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  rainfall: number;
  slope: number;
  aspect: number;
  geology: string;
  geologyScore: number;
  landcover: string;
  landcoverScore: number;
  soilScore: number;
  drainageDensity: number;
  discharge: number;
  distanceToDrainage: number;
  region: string;
  priority: Priority;
  rechargeScore: number;
  confidence: number;
}

export interface FeatureContribution {
  feature: string;
  contribution: number;
}

export interface AIAnalysis {
  springId: string;
  score: number;
  priority: Priority;
  confidence: number;
  featureContributions: FeatureContribution[];
  explanation: string;
  topPositiveFactors: string[];
  topRiskFactors: string[];
  priorityReasons: string[];
  createdAt: string;
}

export interface InterventionRecommendation {
  type: string;
  targetZone: string;
  reason: string;
  risk: string;
}

export interface InterventionPlan {
  springId: string;
  priority: Priority;
  targetZone: string;
  recommendations: InterventionRecommendation[];
  reason: string;
  risk: string;
  validationStatus: ValidationStatus;
}

export interface FieldValidation {
  springId: string;
  gps: string;
  observedDischarge: number;
  springCondition: string;
  waterCondition: string;
  rechargeStructurePresent: boolean;
  notes: string;
  photo?: string;
  status: ValidationStatus;
  createdAt: string;
}

export interface RechargeZone {
  id: string;
  springId: string;
  area: number;
  rainfall: number;
  slope: number;
  geology: string;
  rechargeScore: number;
  priority: Priority;
  suggestedIntervention: string;
}

export interface Region {
  id: string;
  name: string;
  springCount: number;
  highPriorityCount: number;
  avgRechargeScore: number;
}