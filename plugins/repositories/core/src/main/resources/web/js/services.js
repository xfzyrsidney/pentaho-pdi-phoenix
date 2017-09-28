/*! ******************************************************************************
 *
 * Pentaho Data Integration
 *
 * Copyright (C) 2002-2016 by Pentaho : http://www.pentaho.com
 *
 *******************************************************************************
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 ******************************************************************************/

define( [
      'repositories'
    ],
    function ( repoConnectionApp ) {

      repoConnectionApp.service("repositoriesService", function($http) {

        this.baseUrl = "/cxf/repositories";

        this.login = function(username, password)
        {
          return $http({
            method: "POST",
            url: this.baseUrl + "/login",
            data: { "username": username, "password": password }
          });
        };

        this.add = function(repository)
        {
          return $http({
            method: "POST",
            url: this.baseUrl + "/add",
            data: repository
          })
        };
      });

    });
