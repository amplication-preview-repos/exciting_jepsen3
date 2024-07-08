import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ClientTitle } from "../client/ClientTitle";
import { MasterClassTitle } from "../masterClass/MasterClassTitle";

export const AppointmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="timeslot" source="timeslot" />
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="masterClass.id"
          reference="MasterClass"
          label="MasterClass"
        >
          <SelectInput optionText={MasterClassTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
