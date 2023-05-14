import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';

// las props aniadidas son opcionales
export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
