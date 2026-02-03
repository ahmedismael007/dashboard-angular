import { Injectable } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export type FormMode = 'create' | 'update' | 'delete';

@Injectable({ providedIn: 'root' })
export class FormActionService {
  loading = false;

  constructor(
    private api: ApiService,
    private confirm: ConfirmationService,
    private toast: MessageService,
  ) {}

  execute(
    mode: FormMode,
    route: string,
    formData: any,
    id?: number | string,
    onSuccess?: (res: any) => void,
  ) {
    const callApi = () => {
      switch (mode) {
        case 'create':
          return this.api.store(route, formData);
        case 'update':
          if (!id) throw new Error('Update mode requires an id');
          return this.api.update(route, id, formData);
        case 'delete':
          if (!formData) throw new Error('Delete mode requires data (ids)');
          return this.api.destroy(route, formData);
      }
    };

    if (mode === 'delete') {
      this.confirm.confirm({
        message: 'هل أنت متأكد من الحذف؟',
        accept: () => this.run(callApi, onSuccess),
      });
    } else {
      this.run(callApi, onSuccess);
    }
  }

  private run(requestFn: () => Observable<any>, onSuccess?: (res: any) => void) {
    this.loading = true;

    requestFn().subscribe({
      next: (res) => {
        this.loading = false;

        this.toast.add({
          severity: 'success',
          summary: 'عملية ناجحة',
          detail: res?.message ?? 'تمت العملية بنجاح',
        });

        onSuccess?.(res);
      },
      error: (err) => {
        this.loading = false;

        this.toast.add({
          severity: 'error',
          summary: 'خطأ',
          detail: err?.error?.message ?? 'حدث خطأ ما',
        });
      },
    });
  }
}
