import { registerEnumType } from '@nestjs/graphql';

export enum Gender {
    FEMININO = 'FEMININO',
    MASCULINO = 'MASCULINO',
    SEM_GENERO = 'SEM_GENERO',
}

registerEnumType(Gender, {
    name: 'Gender',
});