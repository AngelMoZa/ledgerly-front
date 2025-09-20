import { Component } from '@angular/core';
import { HealthService } from '../../services/health.service';

@Component({
  selector: 'app-health-status',
  templateUrl: './health-status.component.html'
})
export class HealthStatusComponent {
  status: string | null = null;
  loading = false;
  error: string | null = null;

  constructor(private healthService: HealthService) {}

  checkHealth(): void {
    this.loading = true;
    this.error = null;
    this.status = null;

    this.healthService.getHealth().subscribe({
      next: (res) => {
        this.status = res.status;
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudo conectar al backend';
        this.loading = false;
      }
    });
  }
}
