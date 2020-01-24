/*!
 * @license
 * Copyright 2019 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Person } from '@alfresco/js-api';

export class CommentModel {
    id: number;
    message: string;
    created: Date;
    createdBy: Person;
    isSelected: boolean;

    constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.message = obj.message;
            this.created = obj.created;
            this.createdBy = obj.createdBy;
            this.isSelected = obj.isSelected ? obj.isSelected : false;
        }
    }
}
