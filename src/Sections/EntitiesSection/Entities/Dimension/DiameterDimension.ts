import { Dimension, DimensionOptions, DimensionType } from './Dimension'

import { Dxfier } from 'Internals/Dxfier'
import { vec3_t } from 'Internals/Helpers'

export interface DiameterDimOptions extends DimensionOptions {
	leaderLength?: number;
}

export class DiameterDimension extends Dimension {
  first: vec3_t
  leaderLength?: number

  constructor(first: vec3_t, second: vec3_t, options?: DiameterDimOptions) {
    super(options)
    this.dimensionType = DimensionType.Diameter
    this.first = first
    this.definitionPoint = second
    this.leaderLength = options?.leaderLength
  }

  protected override rotate(): number {
    return 0
  }

  override dxfy(dx: Dxfier): void {
    super.dxfy(dx)
    dx.subclassMarker('AcDbDiametricDimension')
    dx.push(15, this.first.x)
    dx.push(25, this.first.y)
    dx.push(35, this.first.z)
    dx.push(40, this.leaderLength)
  }
}
