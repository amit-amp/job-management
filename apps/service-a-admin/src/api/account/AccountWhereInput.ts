import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AccountWhereInput = {
  id?: StringFilter;
  typeField?: StringNullableFilter;
  provider?: StringNullableFilter;
  providerAccountId?: StringNullableFilter;
  refreshToken?: StringNullableFilter;
  accessToken?: StringNullableFilter;
  refreshTokenExpiresIn?: IntNullableFilter;
  expiresAt?: IntNullableFilter;
  tokenType?: StringNullableFilter;
  scope?: StringNullableFilter;
  idToken?: StringNullableFilter;
  sessionState?: StringNullableFilter;
  userId?: StringNullableFilter;
};
